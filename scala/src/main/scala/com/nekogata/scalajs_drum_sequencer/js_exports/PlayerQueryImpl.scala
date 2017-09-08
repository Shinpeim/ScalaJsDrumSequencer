package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sound.SoundRepository
import com.nekogata.scalajs_drum_sequencer.infrastructure.{PlayerStateRepositoryImpl, SoundRepositoryImpl}
import com.nekogata.scalajs_drum_sequencer.query.PlayerQuery

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}


@JSExportTopLevel("PlayerQuery")
class PlayerQueryImpl extends PlayerQuery {
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl
  override val soundRepository: SoundRepository = new SoundRepositoryImpl

  @JSExport
  override def nextPatternId(): String = super.nextPatternId()

  @JSExport
  override def playingPatternId(): String = super.playingPatternId()

  @JSExport
  override def bpm(): Int = super.bpm()

  @JSExport
  override def isPlaying(): Boolean = super.isPlaying()

  @JSExport
  override def areSoundsReady(): Boolean = super.areSoundsReady()

  @JSExport
  override def playingNotePosition(): Int = super.playingNotePosition()
}

