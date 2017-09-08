package com.nekogata.scalajs_drum_sequencer.query

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sequener._

import scala.scalajs.js

trait SequencerQuery {
  val playerStateRepository: PlayerStateRepository
  val sequencerStateRepository: SequencerStateRepository
  val trackRepository: TrackRepository

  def selectedTrackName(): String = sequencerStateRepository.get.selectedTrackName match {
    case RS => "RS"
    case HH => "HH"
    case SD => "SD"
    case BD => "BD"
  }

  def notes: js.Array[Boolean] = {
    import js.JSConverters._

    val playerState = playerStateRepository.get
    val sequencerState = sequencerStateRepository.get

    val patternId = playerState.playingPatternId
    val trackName = sequencerState.selectedTrackName

    trackRepository.get(patternId, trackName).notes.toJSArray
  }
}
