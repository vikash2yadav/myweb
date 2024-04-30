module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to my web");
    });

    app.use("/about/", require("./about"));
    app.use("/about_questions/", require("./about_questions"));
    app.use("/service/", require("./service"));
    app.use("/service_details/", require("./service_details"));
    app.use("/projects/", require("./projects"));
    app.use("/project_images/", require("./project_images"));
    app.use("/project_details/", require("./project_details"));
    app.use("/blogs/", require("./blogs"));
    app.use("/blog_details/", require("./blog_details"));
    app.use("/contacts/", require("./contacts"));
    app.use("/contact_details/", require("./contact_details"));
};
