const loadDash = async (req, res) => {
    try {
        res.render("dash")
    } catch (error) {
        console.log("loadDash Broke",error)
    }
}

const loadFoodLog = async (req, res) => {
    try {
        res.render("foodLog")
    } catch (error) {
        console.log("foodLog Broke",error)
    }
}

const loadProfile = async (req, res) => {
    try {
        res.render("profile")
    } catch (error) {
        console.log("foodLog Broke",error)
    }
}

module.exports ={
    loadDash,
    loadFoodLog,
    loadProfile
}