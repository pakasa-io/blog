#!/usr/bin/env bash

bashrc="${HOME}/.bashrc"

chsh -s /bin/bash

if [ -f $bashrc ]; then
  echo -e "\n# aliases\\n" >> $bashrc
  cat ./aliases.sh >> $bashrc
  source $bashrc
fi

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
brew install golang
brew install hugo
brew install asciidoctor


