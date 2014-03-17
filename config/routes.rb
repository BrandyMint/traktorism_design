module RouteHelpers
  def root_app_path
    if build?
      "http://brandymint.github.io/traktorism_design/"
    else
      "/"
    end
  end

  def stylesheet_path
    "#{root_app_path}stylesheets/application.css"
  end

  def javascript_path
    "#{root_app_path}javascripts/application.js"
  end

  def production_url
    ## Update this with you production URL
    root_app_path
  end

  def page_path
    "/page-name"
  end

  def templated_page_path(slug)
    "/page-name/#{slug}.html"
  end

  def page_path(page)
    "/page-name/#{page}"
  end
end
