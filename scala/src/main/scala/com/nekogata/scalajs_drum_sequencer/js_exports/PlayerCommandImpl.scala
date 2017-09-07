package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.command.PlayerCommand
import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.infrastructure.PlayerStateRepositoryImpl

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("PlayerCommand")
class PlayerCommandImpl extends PlayerCommand {
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl

  @JSExport
  override def play(): Unit = super.play()

  @JSExport
  override def stop(): Unit = super.stop()

  @JSExport
  override def setBpm(bpm: Int): Unit = super.setBpm(bpm)
}
