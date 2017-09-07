package com.nekogata.scalajs_drum_sequencer.query

import com.nekogata.scalajs_drum_sequencer.domain.player.{NotPlaying, PlayerStateRepository, PlayingAt}

trait PlayerQuery {
  val playerStateRepository: PlayerStateRepository

  def isPlaying(): Boolean = playerStateRepository.get.isPlaying()

  def bpm(): Int = playerStateRepository.get.bpm

  def areSoundsReady(): Boolean = playerStateRepository.get.areSoundsReady

  def playingNotePosition(): Int  = playerStateRepository.get.playingNotePosition match {
    case NotPlaying => -1
    case PlayingAt(n) => n
  }
}
