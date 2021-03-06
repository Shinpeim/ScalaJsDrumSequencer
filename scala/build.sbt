enablePlugins(ScalaJSPlugin)

name := "ScalaJSDrumSequencer"

version := "1.0"

scalaVersion := "2.12.2"

scalaJSModuleKind := ModuleKind.CommonJSModule

artifactPath in (Compile, fastOptJS) := (artifactPath in (Compile, fullOptJS)).value

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.2"
