# README

This README would normally document whatever steps are necessary to get the
application up and running.

<!--
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create

Create a default branch (main) and make an initial commit to the repository
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
$ rails db:migrate
#
#
$ yarn add bootstrap
$ yarn add reactstrap

-->

- ...
  <!-- Changed the following -->

  config/initializers/devise.rb

  # Find this line:

  config.sign_out_via = :delete

  # and replace it with this:

  config.sign_out_via = :get

  <!-- # Added below -->

  config/environments/development.rb
  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Added
-Pages Folder
---Home
---ApartmentIndex

Assets Folder
-Components Folder
---Header
