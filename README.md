# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version
- System dependencies
- Configuration
- Database creation
- Database initialization
- How to run the test suite
- Services (job queues, cache servers, search engines, etc.)
- Deployment instructions

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
