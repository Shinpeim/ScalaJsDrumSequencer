package com.nekogata.scalajs_drum_sequencer.infrastructure

import com.nekogata.scalajs_drum_sequencer.domain.player.{NotPlaying, PlayerState, PlayerStateRepository}
import com.nekogata.scalajs_drum_sequencer.domain.sequener.PatternA
import com.nekogata.scalajs_drum_sequencer.js_exports.PlayerEvents

class PlayerStateRepositoryImpl extends PlayerStateRepository{
  override def get: PlayerState = PlayerStateRepositoryImpl.state
  override def store(p: PlayerState): Unit = {
    PlayerStateRepositoryImpl.state = p
    PlayerEvents.PlayerStateChanged.fire()
  }
}

object PlayerStateRepositoryImpl {
  var state: PlayerState = new PlayerState(120, NotPlaying, PatternA, PatternA)
}


