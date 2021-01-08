var inquirer =require("inquirer")
var generateMarkdown =require("./utils/generateMarkdown")
var fs =require("fs")

var questions =[{
    type:"input",
    message:"what's the title?",
    name:"title"
},{
    type:"input",
    message:"what's the description?",
    name:"description"
},{
    type:"input",
    message:"what installation?",
    name:"installation"

},{
    type:"input",
    message:"what kind of usage?",
    name:"usage"
},{
    type:"list",
    message:"what kind of license?",
    choices:     [ "None",
    "Apache 2.0 License",
    "GNU General Public License v3.0",
    "MIT License",
    `BSD 2-Clause "Simplified" License`,
    `BSD 3-Clause "New" or "Revised" License`,
    "Boost Software 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License v2.0",
    "The Unlicense",],
    name:"license"
},{
    type:"input",
    message:"who is contributing?",
    name:"contributing"
},{
    type:"input",
    message:"what kind of test?",
    name:"test"
},{
    type:"input",
    message:" what is your github profile?",
    name:"githubProfileLink"
},{
    type:"input",
    message:"what is your email?",
    name:"email"
}]

function displayQuestions(){
    inquirer.prompt(questions).then(function(data){
        console.log(data)
        var readMeContent=  generateMarkdown(data)
       fs.writeFile("./README.md", readMeContent, function(err){
        if (err) throw err
        console.log("sucess")
       })

    })
}
displayQuestions()

