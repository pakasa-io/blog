alias ws="hugo server -D -O --gc --noHTTPCache"
alias np="hugo new content -k post -c content/posts"
alias sv="gitsave() { git commit -am \"$(date '+%Y-%m-%d %H:%M:%S'): save changes\"; }; gitsave"
alias up="gitpush() { git push origin $(git rev-parse --abbrev-ref HEAD); }; gitpush"
alias sync="git pull"

