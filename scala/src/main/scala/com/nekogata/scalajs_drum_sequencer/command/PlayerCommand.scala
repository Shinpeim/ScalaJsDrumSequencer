package com.nekogata.scalajs_drum_sequencer.command

import com.nekogata.scalajs_drum_sequencer.domain.player.{NotPlaying, PlayerStateRepository, PlayingAt}
import com.nekogata.scalajs_drum_sequencer.domain.sequener._
import com.nekogata.scalajs_drum_sequencer.domain.sound.SoundRepository

import scala.scalajs.js.timers._

trait PlayerCommand {
  val playerStateRepository: PlayerStateRepository
  val sequencerStateRepository: SequencerStateRepository
  val trackRepository: TrackRepository
  val soundRepository: SoundRepository

  def play(): Unit = {

    val playerState = playerStateRepository.get
    val newState = playerState.play()
    playerStateRepository.store(newState)

    setTimeout(newState.millSecsToNextNote()) {
      playNextSound()
    }
  }

  def stop(): Unit = {
    val playerState = playerStateRepository.get
    val newState = playerState.stop()
    playerStateRepository.store(newState)
  }

  def setBpm(bpm: Int): Unit = {
    val playerState = playerStateRepository.get
    val newState = playerState.setBpm(bpm)
    playerStateRepository.store(newState)
  }

  def playNextSound(): Unit = {
    val playerState = playerStateRepository.get
    if ( !playerState.isPlaying() ) {
      return
    }

    playCurrentPositionSound()

    val newState = playerState.moveToNextPlayingPosition()
    playerStateRepository.store(newState)

    setTimeout(newState.millSecsToNextNote()) {
      playNextSound()
    }
  }

  def playCurrentPositionSound(): Unit ={
    val playerState = playerStateRepository.get
    val sequencerState = sequencerStateRepository.get

    val currentPlayingPosition = playerState.playingNotePosition match {
      case NotPlaying => return
      case PlayingAt(n) => n
    }

    val hhTrack = trackRepository.get(sequencerState.selectedPatternId, HH)
    val rsTrack = trackRepository.get(sequencerState.selectedPatternId, RS)
    val sdTrack = trackRepository.get(sequencerState.selectedPatternId, SD)
    val bdTrack = trackRepository.get(sequencerState.selectedPatternId, BD)

    val hhSound = soundRepository.get(HH)
    val rsSound = soundRepository.get(RS)
    val sdSound = soundRepository.get(SD)
    val bdSound = soundRepository.get(BD)

    if (hhTrack.notes(currentPlayingPosition)) {
      hhSound.play()
    }
    if (rsTrack.notes(currentPlayingPosition)) {
      rsSound.play()
    }
    if (sdTrack.notes(currentPlayingPosition)) {
      sdSound.play()
    }
    if (bdTrack.notes(currentPlayingPosition)) {
      bdSound.play()
    }
  }
}
