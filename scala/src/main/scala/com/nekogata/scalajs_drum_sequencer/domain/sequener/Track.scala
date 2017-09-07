package com.nekogata.scalajs_drum_sequencer.domain.sequener

class Track(val notes: Seq[Boolean]) {
  def toggle(index: Int): Track= new Track(notes.updated(index, ! notes(index)))
}

object Track {
  val defaultHHNotes = Seq(
    true, false, true, false,
    true, false, true, false,
    true, false, true, false,
    true, false, true, false
  )

  val defaultRSNotes = Seq(
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false
  )

  val defaultSDNotes = Seq(
    false, false, false, false,
    true, false, false, false,
    false, false, false, false,
    true, false, false, false
  )

  val defaultBDNotes = Seq(
    true, false, false, false,
    false, false, false, false,
    true, false, false, false,
    false, false, false, false
  )
}
