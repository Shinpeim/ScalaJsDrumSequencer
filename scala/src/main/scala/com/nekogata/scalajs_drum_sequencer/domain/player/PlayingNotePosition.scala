package com.nekogata.scalajs_drum_sequencer.domain.player

sealed trait PlayingNotePosition
case class PlayingAt(pos: Int) extends PlayingNotePosition
case object NotPlaying extends PlayingNotePosition

