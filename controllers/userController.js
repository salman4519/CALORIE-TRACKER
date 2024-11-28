const loadDash = async (req, res) => {
    try {
        res.render("dash")
    } catch (error) {
        console.log("loadDash Broke",error)
    }
}

module.exports ={
    loadDash
}