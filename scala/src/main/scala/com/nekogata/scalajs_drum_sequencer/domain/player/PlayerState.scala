package com.nekogata.scalajs_drum_sequencer.domain.player

case class PlayerState(
  val bpm: Int,
  val playingNotePosition: PlayingNotePosition
) {

  def isPlaying(): Boolean = playingNotePosition match {
    case NotPlaying => false
    case _ => true
  }

  def millSecsToNextNote(): Int = {
    60000 / (bpm * 4)
  }

  def play():PlayerState = {
    if ( playingNotePosition != NotPlaying) {
      return this
    }

    copy(
      playingNotePosition = PlayingAt(0)
    )
  }

  def stop(): PlayerState = {
    copy(
      playingNotePosition = NotPlaying
    )
  }

  def setBpm(b: Int): PlayerState = {
    copy(bpm = b)
  }

  def moveToNextPlayingPosition(): PlayerState = {
    playingNotePosition match {
      case NotPlaying =>
        this
      case PlayingAt(p) =>
        val newPosition = if (p == 15) 0 else p + 1
        copy(playingNotePosition = PlayingAt(newPosition))
    }
  }
}
