package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.Event

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("PlayerEvents")
object PlayerEvents{
  @JSExport
  val PlayerStateChanged = new Event{
    @JSExport
    override def subscribe(f: js.Function): Unit = super.subscribe(f)
  }
}
