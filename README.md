# package-watcher
watch package.json changes and execute cmd "npm install"

# Why this?
Jenkins server to run 'npm install' and then copy to target server is very slow and inefficient, so this solution is running an node.js app as watcher on app server, once the project package.json add or changed will trigger the 'npm install'

# How to use?
Add your local project's package.json full path to watch-list.js file, that's it.

# For now only support windows host
