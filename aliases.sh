alias ws="hugo server -D -O --gc --noHTTPCache"
alias np="hugo new content -k post -c content/posts"
alias sv="source $HOME/.bashrc && git commit -am \"$(date '+%Y-%m-%d %H:%M:%S'): save changes\""
alias up="source $HOME/.bashrc && git push origin $(git rev-parse --abbrev-ref HEAD)"
alias sync="git pull"

