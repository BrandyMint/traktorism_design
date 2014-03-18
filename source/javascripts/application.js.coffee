#= require jquery/jquery
#= require bootstrap
#= require lib/jquery.role.min
#= require underscore/underscore

$ ->
  console.log 'it works'
  $('@signup-take-picture').on 'click', (e) ->
    e.preventDefault()
    $('@signup-photo-input').click()

  signupForm1 = $('@signup-form-1')
  signupForm1Input = $('@signup-form-1 input')
  #signupForm1Input.on 'keydown', (e) ->
  
  techBlock = $('@tech-block')
  techBlock.on 'click', (e) ->
    href = $(@).attr 'href'
    window.location.href = href

  alertOnce = $('@alert-once')
  alertOnce.one 'click', (e) ->
    e.preventDefault()
    msg = $(@).data('alert')
    alert msg

