package com.nekogata.scalajs_drum_sequencer.command

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sequener._

trait SequencerCommand {
  val trackRepository: TrackRepository
  val sequencerStateRepository: SequencerStateRepository
  val playerStateRepository: PlayerStateRepository

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
    val playerState = playerStateRepository.get

    val p = playerState.playingPatternId
    val tn = sequencerState.selectedTrackName

    val track = trackRepository.get(p, tn)
    val newTrack = track.toggle(index)

    trackRepository.store(p, tn, newTrack)
  }
}
