source 'http://rubygems.org'

gem 'sqlite3'

# REFINERY CMS ================================================================
# Anything you put in here will be overridden when the app gets updated.

gem 'refinerycms',              '~> 1.0.4'

group :development, :test do
  # To use refinerycms-testing, uncomment it (if it's commented out) and run 'bundle install'
  # Then, run 'rails generate refinerycms_testing' which will copy its support files.
  # Finally, run 'rake' to run the tests.
  # gem 'refinerycms-testing',    '~> 1.0.4'
end

# END REFINERY CMS ============================================================

# USER DEFINED
gem 'fog'
gem 'dalli'

group :production do
  gem 'rack-pagespeed', :git => "https://github.com/juliocesar/rack-pagespeed.git"
  gem 'newrelic_rpm'
end
group :development do
  gem "mongrel", "1.2.0.pre2"
end

# Specify additional Refinery CMS Engines here (all optional):
# gem 'refinerycms-inquiries',    '~> 1.0'
# gem "refinerycms-news",         '~> 1.2'
gem 'refinerycms-blog',         '~> 1.6'
# gem 'refinerycms-page-images',  '~> 1.0'

# Add i18n support (optional, you can remove this if you really want to).
gem 'refinerycms-i18n',         '~> 1.0.0'

# END USER DEFINED
