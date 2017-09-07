package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl
import com.nekogata.scalajs_drum_sequencer.query.PlayerQuery

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}


@JSExportTopLevel("PlayerQuery")
class PlayerQueryImpl extends PlayerQuery {
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl

  @JSExport
  override def bpm(): Int = super.bpm()

  @JSExport
  override def isPlaying(): Boolean = super.isPlaying()

  @JSExport
  override def areSoundsReady(): Boolean = super.areSoundsReady()

  @JSExport
  override def playingNotePosition(): Int = super.playingNotePosition()
}

