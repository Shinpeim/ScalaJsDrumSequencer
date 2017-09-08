package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.command.PlayerCommand
import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sequener.{SequencerStateRepository, TrackRepository}
import com.nekogata.scalajs_drum_sequencer.domain.sound.SoundRepository
import com.nekogata.scalajs_drum_sequencer.infrastructure.{PlayerStateRepositoryImpl, SequencerStateRepositoryImpl, SoundRepositoryImpl, TrackRepositoryImpl}

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("PlayerCommand")
class PlayerCommandImpl extends PlayerCommand {
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl
  override val trackRepository: TrackRepository = new TrackRepositoryImpl
  override val soundRepository: SoundRepository = new SoundRepositoryImpl

  @JSExport
  override def loadSounds(): Unit = super.loadSounds()

  @JSExport
  override def play(): Unit = super.play()

  @JSExport
  override def stop(): Unit = super.stop()

  @JSExport
  override def setBpm(bpm: Int): Unit = super.setBpm(bpm)

  @JSExport
  override def setNextPattern(id: String): Unit = super.setNextPattern(id)
}
