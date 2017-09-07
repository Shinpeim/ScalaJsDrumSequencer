package com.nekogata.scalajs_drum_sequencer.query

import com.nekogata.scalajs_drum_sequencer.domain.sequener._

import scala.scalajs.js

trait SequencerQuery {
  val sequencerStateRepository: SequencerStateRepository
  val trackRepository: TrackRepository

  def selectedPatternId(): String = sequencerStateRepository.get.selectedPatternId match {
    case PatternA => "A"
    case PatternB => "B"
    case PatternC => "C"
    case PatternD => "D"
  }

  def selectedTrackName(): String = sequencerStateRepository.get.selectedTrackName match {
    case RS => "RS"
    case HH => "HH"
    case SD => "SD"
    case BD => "BD"
  }

  def notes: js.Array[Boolean] = {
    import js.JSConverters._

    val sequencerState = sequencerStateRepository.get
    val patternId = sequencerState.selectedPatternId
    val trackName = sequencerState.selectedTrackName

    trackRepository.get(patternId, trackName).notes.toJSArray
  }
}
