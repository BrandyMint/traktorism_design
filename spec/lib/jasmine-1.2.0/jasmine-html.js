jasmine.HtmlReporterHelpers={},jasmine.HtmlReporterHelpers.createDom=function(e,t){for(var n=document.createElement(e),r=2;r<arguments.length;r++){var i=arguments[r];"string"==typeof i?n.appendChild(document.createTextNode(i)):i&&n.appendChild(i)}for(var o in t)"className"==o?n[o]=t[o]:n.setAttribute(o,t[o]);return n},jasmine.HtmlReporterHelpers.getSpecStatus=function(e){var t=e.results(),n=t.passed()?"passed":"failed";return t.skipped&&(n="skipped"),n},jasmine.HtmlReporterHelpers.appendToSummary=function(e,t){var n=this.dom.summary,r="undefined"==typeof e.parentSuite?"suite":"parentSuite",i=e[r];i&&("undefined"==typeof this.views.suites[i.id]&&(this.views.suites[i.id]=new jasmine.HtmlReporter.SuiteView(i,this.dom,this.views)),n=this.views.suites[i.id].element),n.appendChild(t)},jasmine.HtmlReporterHelpers.addHelpers=function(e){for(var t in jasmine.HtmlReporterHelpers)e.prototype[t]=jasmine.HtmlReporterHelpers[t]},jasmine.HtmlReporter=function(e){function t(){var e;return function(){if(!e){for(var t=[],n=o.location.search.substring(1).split("&"),r=0;r<n.length;r++){var i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}e=t.spec}}(),e}function n(e){s.reporter=i.createDom("div",{id:"HTMLReporter",className:"jasmine_reporter"},s.banner=i.createDom("div",{className:"banner"},i.createDom("span",{className:"title"},"Jasmine "),i.createDom("span",{className:"version"},e)),s.symbolSummary=i.createDom("ul",{className:"symbolSummary"}),s.alert=i.createDom("div",{className:"alert"}),s.results=i.createDom("div",{className:"results"},s.summary=i.createDom("div",{className:"summary"}),s.details=i.createDom("div",{id:"details"})))}var r,i=this,o=e||window.document,s={};return i.logRunningSpecs=!1,i.reportRunnerStarting=function(e){var t=e.specs()||[];0!=t.length&&(n(e.env.versionString()),o.body.appendChild(s.reporter),r=new jasmine.HtmlReporter.ReporterView(s),r.addSpecs(t,i.specFilter))},i.reportRunnerResults=function(){r&&r.complete()},i.reportSuiteResults=function(e){r.suiteComplete(e)},i.reportSpecStarting=function(e){i.logRunningSpecs&&i.log(">> Jasmine Running "+e.suite.description+" "+e.description+"...")},i.reportSpecResults=function(e){r.specComplete(e)},i.log=function(){var e=jasmine.getGlobal().console;e&&e.log&&(e.log.apply?e.log.apply(e,arguments):e.log(arguments))},i.specFilter=function(e){return t()?0===e.getFullName().indexOf(t()):!0},i},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter),jasmine.HtmlReporter.ReporterView=function(e){function t(){-1===e.reporter.className.search(/showDetails/)&&(e.reporter.className+=" showDetails")}function n(e){return"undefined"==typeof e}function r(e){return!n(e)}function i(e){var t=e+" spec";return e>1&&(t+="s"),t}return this.startedAt=new Date,this.runningSpecCount=0,this.completeSpecCount=0,this.passedCount=0,this.failedCount=0,this.skippedCount=0,this.createResultsMenu=function(){this.resultsMenu=this.createDom("span",{className:"resultsMenu bar"},this.summaryMenuItem=this.createDom("a",{className:"summaryMenuItem",href:"#"},"0 specs")," | ",this.detailsMenuItem=this.createDom("a",{className:"detailsMenuItem",href:"#"},"0 failing")),this.summaryMenuItem.onclick=function(){e.reporter.className=e.reporter.className.replace(/ showDetails/g,"")},this.detailsMenuItem.onclick=function(){t()}},this.addSpecs=function(t,n){this.totalSpecCount=t.length,this.views={specs:{},suites:{}};for(var r=0;r<t.length;r++){var i=t[r];this.views.specs[i.id]=new jasmine.HtmlReporter.SpecView(i,e,this.views),n(i)&&this.runningSpecCount++}},this.specComplete=function(t){this.completeSpecCount++,n(this.views.specs[t.id])&&(this.views.specs[t.id]=new jasmine.HtmlReporter.SpecView(t,e));var r=this.views.specs[t.id];switch(r.status()){case"passed":this.passedCount++;break;case"failed":this.failedCount++;break;case"skipped":this.skippedCount++}r.refresh(),this.refresh()},this.suiteComplete=function(e){var t=this.views.suites[e.id];n(t)||t.refresh()},this.refresh=function(){n(this.resultsMenu)&&this.createResultsMenu(),n(this.runningAlert)&&(this.runningAlert=this.createDom("a",{href:"?",className:"runningAlert bar"}),e.alert.appendChild(this.runningAlert)),this.runningAlert.innerHTML="Running "+this.completeSpecCount+" of "+i(this.totalSpecCount),n(this.skippedAlert)&&(this.skippedAlert=this.createDom("a",{href:"?",className:"skippedAlert bar"})),this.skippedAlert.innerHTML="Skipping "+this.skippedCount+" of "+i(this.totalSpecCount)+" - run all",1===this.skippedCount&&r(e.alert)&&e.alert.appendChild(this.skippedAlert),n(this.passedAlert)&&(this.passedAlert=this.createDom("span",{href:"?",className:"passingAlert bar"})),this.passedAlert.innerHTML="Passing "+i(this.passedCount),n(this.failedAlert)&&(this.failedAlert=this.createDom("span",{href:"?",className:"failingAlert bar"})),this.failedAlert.innerHTML="Failing "+i(this.failedCount),1===this.failedCount&&r(e.alert)&&(e.alert.appendChild(this.failedAlert),e.alert.appendChild(this.resultsMenu)),this.summaryMenuItem.innerHTML=""+i(this.runningSpecCount),this.detailsMenuItem.innerHTML=""+this.failedCount+" failing"},this.complete=function(){e.alert.removeChild(this.runningAlert),this.skippedAlert.innerHTML="Ran "+this.runningSpecCount+" of "+i(this.totalSpecCount)+" - run all",0===this.failedCount?e.alert.appendChild(this.createDom("span",{className:"passingAlert bar"},"Passing "+i(this.passedCount))):t(),e.banner.appendChild(this.createDom("span",{className:"duration"},"finished in "+((new Date).getTime()-this.startedAt.getTime())/1e3+"s"))},this},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.ReporterView),jasmine.HtmlReporter.SpecView=function(e,t,n){this.spec=e,this.dom=t,this.views=n,this.symbol=this.createDom("li",{className:"pending"}),this.dom.symbolSummary.appendChild(this.symbol),this.summary=this.createDom("div",{className:"specSummary"},this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(this.spec.getFullName()),title:this.spec.getFullName()},this.spec.description)),this.detail=this.createDom("div",{className:"specDetail"},this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(this.spec.getFullName()),title:this.spec.getFullName()},this.spec.getFullName()))},jasmine.HtmlReporter.SpecView.prototype.status=function(){return this.getSpecStatus(this.spec)},jasmine.HtmlReporter.SpecView.prototype.refresh=function(){switch(this.symbol.className=this.status(),this.status()){case"skipped":break;case"passed":this.appendSummaryToSuiteDiv();break;case"failed":this.appendSummaryToSuiteDiv(),this.appendFailureDetail()}},jasmine.HtmlReporter.SpecView.prototype.appendSummaryToSuiteDiv=function(){this.summary.className+=" "+this.status(),this.appendToSummary(this.spec,this.summary)},jasmine.HtmlReporter.SpecView.prototype.appendFailureDetail=function(){this.detail.className+=" "+this.status();for(var e=this.spec.results().getItems(),t=this.createDom("div",{className:"messages"}),n=0;n<e.length;n++){var r=e[n];"log"==r.type?t.appendChild(this.createDom("div",{className:"resultMessage log"},r.toString())):"expect"==r.type&&r.passed&&!r.passed()&&(t.appendChild(this.createDom("div",{className:"resultMessage fail"},r.message)),r.trace.stack&&t.appendChild(this.createDom("div",{className:"stackTrace"},r.trace.stack)))}t.childNodes.length>0&&(this.detail.appendChild(t),this.dom.details.appendChild(this.detail))},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.SpecView),jasmine.HtmlReporter.SuiteView=function(e,t,n){this.suite=e,this.dom=t,this.views=n,this.element=this.createDom("div",{className:"suite"},this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(this.suite.getFullName())},this.suite.description)),this.appendToSummary(this.suite,this.element)},jasmine.HtmlReporter.SuiteView.prototype.status=function(){return this.getSpecStatus(this.suite)},jasmine.HtmlReporter.SuiteView.prototype.refresh=function(){this.element.className+=" "+this.status()},jasmine.HtmlReporterHelpers.addHelpers(jasmine.HtmlReporter.SuiteView),jasmine.TrivialReporter=function(e){this.document=e||document,this.suiteDivs={},this.logRunningSpecs=!1},jasmine.TrivialReporter.prototype.createDom=function(e,t){for(var n=document.createElement(e),r=2;r<arguments.length;r++){var i=arguments[r];"string"==typeof i?n.appendChild(document.createTextNode(i)):i&&n.appendChild(i)}for(var o in t)"className"==o?n[o]=t[o]:n.setAttribute(o,t[o]);return n},jasmine.TrivialReporter.prototype.reportRunnerStarting=function(e){var t,n;this.outerDiv=this.createDom("div",{id:"TrivialReporter",className:"jasmine_reporter"},this.createDom("div",{className:"banner"},this.createDom("div",{className:"logo"},this.createDom("span",{className:"title"},"Jasmine"),this.createDom("span",{className:"version"},e.env.versionString())),this.createDom("div",{className:"options"},"Show ",t=this.createDom("input",{id:"__jasmine_TrivialReporter_showPassed__",type:"checkbox"}),this.createDom("label",{"for":"__jasmine_TrivialReporter_showPassed__"}," passed "),n=this.createDom("input",{id:"__jasmine_TrivialReporter_showSkipped__",type:"checkbox"}),this.createDom("label",{"for":"__jasmine_TrivialReporter_showSkipped__"}," skipped"))),this.runnerDiv=this.createDom("div",{className:"runner running"},this.createDom("a",{className:"run_spec",href:"?"},"run all"),this.runnerMessageSpan=this.createDom("span",{},"Running..."),this.finishedAtSpan=this.createDom("span",{className:"finished-at"},""))),this.document.body.appendChild(this.outerDiv);for(var r=e.suites(),i=0;i<r.length;i++){var o=r[i],s=this.createDom("div",{className:"suite"},this.createDom("a",{className:"run_spec",href:"?spec="+encodeURIComponent(o.getFullName())},"run"),this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(o.getFullName())},o.description));this.suiteDivs[o.id]=s;var a=this.outerDiv;o.parentSuite&&(a=this.suiteDivs[o.parentSuite.id]),a.appendChild(s)}this.startedAt=new Date;var c=this;t.onclick=function(){t.checked?c.outerDiv.className+=" show-passed":c.outerDiv.className=c.outerDiv.className.replace(/ show-passed/,"")},n.onclick=function(){n.checked?c.outerDiv.className+=" show-skipped":c.outerDiv.className=c.outerDiv.className.replace(/ show-skipped/,"")}},jasmine.TrivialReporter.prototype.reportRunnerResults=function(e){var t=e.results(),n=t.failedCount>0?"runner failed":"runner passed";this.runnerDiv.setAttribute("class",n),this.runnerDiv.setAttribute("className",n);for(var r=e.specs(),i=0,o=0;o<r.length;o++)this.specFilter(r[o])&&i++;var s=""+i+" spec"+(1==i?"":"s")+", "+t.failedCount+" failure"+(1==t.failedCount?"":"s");s+=" in "+((new Date).getTime()-this.startedAt.getTime())/1e3+"s",this.runnerMessageSpan.replaceChild(this.createDom("a",{className:"description",href:"?"},s),this.runnerMessageSpan.firstChild),this.finishedAtSpan.appendChild(document.createTextNode("Finished at "+(new Date).toString()))},jasmine.TrivialReporter.prototype.reportSuiteResults=function(e){var t=e.results(),n=t.passed()?"passed":"failed";0===t.totalCount&&(n="skipped"),this.suiteDivs[e.id].className+=" "+n},jasmine.TrivialReporter.prototype.reportSpecStarting=function(e){this.logRunningSpecs&&this.log(">> Jasmine Running "+e.suite.description+" "+e.description+"...")},jasmine.TrivialReporter.prototype.reportSpecResults=function(e){var t=e.results(),n=t.passed()?"passed":"failed";t.skipped&&(n="skipped");for(var r=this.createDom("div",{className:"spec "+n},this.createDom("a",{className:"run_spec",href:"?spec="+encodeURIComponent(e.getFullName())},"run"),this.createDom("a",{className:"description",href:"?spec="+encodeURIComponent(e.getFullName()),title:e.getFullName()},e.description)),i=t.getItems(),o=this.createDom("div",{className:"messages"}),s=0;s<i.length;s++){var a=i[s];"log"==a.type?o.appendChild(this.createDom("div",{className:"resultMessage log"},a.toString())):"expect"==a.type&&a.passed&&!a.passed()&&(o.appendChild(this.createDom("div",{className:"resultMessage fail"},a.message)),a.trace.stack&&o.appendChild(this.createDom("div",{className:"stackTrace"},a.trace.stack)))}o.childNodes.length>0&&r.appendChild(o),this.suiteDivs[e.suite.id].appendChild(r)},jasmine.TrivialReporter.prototype.log=function(){var e=jasmine.getGlobal().console;e&&e.log&&(e.log.apply?e.log.apply(e,arguments):e.log(arguments))},jasmine.TrivialReporter.prototype.getLocation=function(){return this.document.location},jasmine.TrivialReporter.prototype.specFilter=function(e){for(var t={},n=this.getLocation().search.substring(1).split("&"),r=0;r<n.length;r++){var i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t.spec?0===e.getFullName().indexOf(t.spec):!0};