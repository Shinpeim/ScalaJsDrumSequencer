package com.nekogata.scalajs_drum_sequencer.command

import com.nekogata.scalajs_drum_sequencer.domain.player.{NotPlaying, PlayerStateRepository, PlayingAt}
import com.nekogata.scalajs_drum_sequencer.domain.sequener._
import com.nekogata.scalajs_drum_sequencer.domain.sound.SoundRepository

import scala.scalajs.js.timers._

trait PlayerCommand {
  val playerStateRepository: PlayerStateRepository
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

  def setNextPattern(id: String): Unit = {
    val patternId = id match {
      case "A" => PatternA
      case "B" => PatternB
      case "C" => PatternC
      case "D" => PatternD
    }
    val playerState = playerStateRepository.get
    val newState = playerState.setNextPatternId(patternId)
    playerStateRepository.store(newState)

  }

  def loadSounds(): Unit = {
    import scala.scalajs.concurrent.JSExecutionContext.Implicits.queue
    val hhSound = soundRepository.get(HH)
    val rsSound = soundRepository.get(RS)
    val sdSound = soundRepository.get(SD)
    val bdSound = soundRepository.get(BD)

    hhSound.load("./sounds/hh.wav").foreach(s => soundRepository.store(HH, s))
    rsSound.load("./sounds/rs.wav").foreach(s => soundRepository.store(RS, s))
    sdSound.load("./sounds/sd.wav").foreach(s => soundRepository.store(SD, s))
    bdSound.load("./sounds/bd.wav").foreach(s => soundRepository.store(BD, s))
  }

  def playCurrentPositionSound(): Unit ={
    val playerState = playerStateRepository.get

    val currentPlayingPosition = playerState.playingNotePosition match {
      case NotPlaying => return
      case PlayingAt(n) => n
    }

    val hhTrack = trackRepository.get(playerState.playingPatternId, HH)
    val rsTrack = trackRepository.get(playerState.playingPatternId, RS)
    val sdTrack = trackRepository.get(playerState.playingPatternId, SD)
    val bdTrack = trackRepository.get(playerState.playingPatternId, BD)

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
