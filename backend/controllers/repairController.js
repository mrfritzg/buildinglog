const Repairs = require('../models/RepairModel')
const Comments = require('../models/commentModel')
// const repairs = require('../models/repairs')

module.exports.seed = async (req, res) => {
    await Repairs.deleteMany({})
    await Repairs.create(repairs)
    res.redirect('/repairs')
}

module.exports.index = (req, res) => {
    // const repairs = await Repairs.find().sort({ createdAt: 1 })
    // res.render('repairs/Index', { repairs })
    // res.send('Welcome to the Bulding Mainenance Logs')
    res.json({message: 'hello'})
}

module.exports.new = async (req, res) => {
    res.render('repairs/New')
}

module.exports.delete = async (req, res) => {
    // first find the post, store it in a variable, then delete it from database
    const post = await Repairs.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Comments.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: post.comments 
    }})
    res.redirect('/repairs')
}

module.exports.update = async (req, res) => {
    await Repairs.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/repairs/${req.params.id}`)
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        await Repairs.create(req.body)
        res.redirect('/repairs')
    } catch(err) {
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    const post = await Repairs.findById(req.params.id)
    console.log(post)
    console.log('edit route')
    res.render('repairs/Edit', { post })
}

module.exports.show = async (req, res) => {
    // populate replaces the ids with actual documents/objects we can use
    const post = await Repairs.findById(req.params.id).populate('comments')
    res.render('repairs/Show', { post })
}


// EXTRA LOGIC (for comments)

module.exports.createComment = async (req, res) => {
    // Alternative to Comments.create():
    // const comment = new Comments(req.body)
    // comment.save()
    
    // create a document in our comments collection
    const comment = await Comments.create(req.body)
    // find the post 
    await Repairs.findByIdAndUpdate(req.params.id, {
        // and push the new comment document's id
        $push: {
            // to the post's comments field/property
            comments: comment._id
        }
    })
    res.redirect(`/repairs/${req.params.id}`)
}

module.exports.deleteComment = async (req, res) => {
    // first use the id to delete the comment from the comments collection
    await Comments.findByIdAndDelete(req.params.cid)
    // then use the post's id to find the post
    await Repairs.findByIdAndUpdate(req.params.id, {
        // and pull/remove the reference id (to the comment) from
        $pull: {
            // the comments array
            comments: req.params.cid
        }
    })
    res.redirect(`/repairs/${req.params.id}`)
}

module.exports.indexComment = async (req, res) => {
    // target the comments property
    const post = await Repairs.findById(req.params.id).populate('comments')
    res.send(post.comments)
}

module.exports.showComment = async (req, res) => {
    // find the post and filter it's comments property array
    const comment = await Comments.findById(req.params.cid)
    res.render('comments/Edit', { postId: req.params.id, comment })
}

module.exports.updateComment = async (req, res) => {
    // update a comment by 
    await Comments.findByIdAndUpdate(req.params.cid, req.body)
    res.redirect(`/repairs/${req.params.id}`)
}