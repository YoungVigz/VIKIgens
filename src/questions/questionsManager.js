const questions = require('./questions');
const cli = require('../cli');

module.exports = async () => {
    const projectType = await questions.project_type();
    const projectName = await questions.project_name();
    const git = await questions.git();

    let githubName;
    let repoName;

    if(git.git == 'yes'){
        githubName = await questions.github_name();
        repoName = await questions.repo_name();
        githubName = githubName.github_name;
        repoName = repoName.repo_name;
    }   

    cli({
        projectType: projectType.project_type,
        projectName: projectName.project_name,
        githubName,
        repoName
    });
};