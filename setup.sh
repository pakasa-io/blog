#!/usr/bin/env zsh

zshrc="${HOME}/.zshrc"
bashrc="${HOME}/.bashrc"

if [ -f $zshrc ]; then
  echo "setup zshrc"
  echo "\n# aliases\n" >> $zshrc
  cat ./aliases.sh >> $zshrc
  source zshrc
fi

if [ -f $bashrc ]; then
   echo "setup bashrc"
  echo "\n# aliases\n" >> $bashrc
  cat ./aliases.sh >> $bashrc
  source bashrc
fi

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
brew install golang
brew install hugo
brew install asciidoctor


