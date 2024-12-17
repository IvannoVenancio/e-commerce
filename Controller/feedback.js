exports.feedback = async (req, res) => {
    try {
        res.render("feedback", { layout: "feedmain.handlebars" });
    } catch (err) {
        console.log(err);
    }
};
