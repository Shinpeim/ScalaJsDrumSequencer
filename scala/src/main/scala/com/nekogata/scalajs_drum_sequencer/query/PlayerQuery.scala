package com.nekogata.scalajs_drum_sequencer.query

import com.nekogata.scalajs_drum_sequencer.domain.player.{NotPlaying, PlayerStateRepository, PlayingAt}
import com.nekogata.scalajs_drum_sequencer.domain.sequener.{BD, HH, RS, SD}
import com.nekogata.scalajs_drum_sequencer.domain.sound.SoundRepository

trait PlayerQuery {
  val playerStateRepository: PlayerStateRepository
  val soundRepository: SoundRepository

  def isPlaying(): Boolean = playerStateRepository.get.isPlaying()

  def bpm(): Int = playerStateRepository.get.bpm

  def areSoundsReady(): Boolean = {
    val hhLoaded = soundRepository.get(HH).isLoaded()
    val rsLoaded = soundRepository.get(RS).isLoaded()
    val sdLoaded = soundRepository.get(SD).isLoaded()
    val bdLoaded = soundRepository.get(BD).isLoaded()

    (hhLoaded && rsLoaded && sdLoaded && bdLoaded)
  }

  def playingNotePosition(): Int  = playerStateRepository.get.playingNotePosition match {
    case NotPlaying => -1
    case PlayingAt(n) => n
  }
}
