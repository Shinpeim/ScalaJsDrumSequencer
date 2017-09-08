package com.nekogata.scalajs_drum_sequencer.domain.player

import com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternId

case class PlayerState(
  val bpm: Int,
  val playingNotePosition: PlayingNotePosition,
  val playingPatternId: PatternId,
  val nextPatternId: PatternId
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

  def setNextPatternId(id: PatternId): PlayerState = {
    if (isPlaying()) {
      copy(nextPatternId = id)
    } else {
      copy(
        nextPatternId = id,
        playingPatternId = id
      )
    }
  }

  def moveToNextPlayingPosition(): PlayerState = {
    playingNotePosition match {
      case NotPlaying =>
        this
      case PlayingAt(p) =>
        val newPosition = if (p == 15) 0 else p + 1
        val newPlayingPatternId = if (p == 15) nextPatternId else playingPatternId

        copy(
          playingNotePosition = PlayingAt(newPosition),
          playingPatternId = newPlayingPatternId
        )
    }
  }
}
