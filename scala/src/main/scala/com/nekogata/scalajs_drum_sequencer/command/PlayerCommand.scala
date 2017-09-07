package com.nekogata.scalajs_drum_sequencer.command

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository

import scala.scalajs.js.timers._

trait PlayerCommand {
  val playerStateRepository: PlayerStateRepository

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

    println("play sound")

    // update
    val newState = playerState.moveToNextPlayingPosition()
    playerStateRepository.store(newState)

    setTimeout(newState.millSecsToNextNote()) {
      playNextSound()
    }
  }
}
