const gitlog = require("gitlog").default;

const options = {
    repo: __dirname + "/test-repo-folder",
    number: 20,
    author: "Dom Harrington",
    fields: ["authorDate"],
    execOptions: { maxBuffer: 1000 * 1024 },
};


process.env.VUE_DATE = gitlog(options);