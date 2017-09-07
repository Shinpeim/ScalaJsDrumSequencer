package com.nekogata.scalajs_drum_sequencer.domain.player

trait PlayerStateRepository {
  def get: PlayerState
  def store(p: PlayerState): Unit
}
