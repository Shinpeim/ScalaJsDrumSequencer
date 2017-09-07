package com.nekogata.scalajs_drum_sequencer.command

import com.nekogata.scalajs_drum_sequencer.domain.sequener._

trait SequencerCommand {
  val trackRepository: TrackRepository
  val sequencerStateRepository: SequencerStateRepository

  def selectPattern(id: String): Unit = {
    val patternId = id match {
      case "A" => PatternA
      case "B" => PatternB
      case "C" => PatternC
      case "D" => PatternD
    }

    val newState = sequencerStateRepository.get.selectPattern(patternId)
    sequencerStateRepository.store(newState)
  }

  def selectTrack(name: String): Unit = {
     val trackName = name match {
      case "HH" => HH
      case "RS" => RS
      case "SD" => SD
      case "BD" => BD
    }

    val newState = sequencerStateRepository.get.selectTrack(trackName)
    sequencerStateRepository.store(newState)
  }


  def toggleNote(index: Int): Unit = {
    val sequencerState = sequencerStateRepository.get

    val p = sequencerState.selectedPatternId
    val tn = sequencerState.selectedTrackName

    val track = trackRepository.get(p, tn)
    val newTrack = track.toggle(index)

    trackRepository.store(p, tn, newTrack)
  }
}
