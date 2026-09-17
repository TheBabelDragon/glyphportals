# GlyphPortals

A walkable raycaster whose walls are made entirely of Hebrew letters — no textures, no shaders, just glyphs and distance — with **seamless portal-style non-Euclidean geometry** (the approach shown in CodeParade’s Non-Euclidean Worlds Engine).

Classic red/cyan anaglyph 3D. Grab a pair of glasses if you have them, or just enjoy the retro double-image.

**Live:** https://thebabeldragon.github.io/glyphportals/

Or open `index.html` locally.

## Features

- Multiple **custom non-Euclidean maze levels** with different portal layouts
- **Finish lines** (gold on minimap) — reach them to complete a level
- Seamless **portal continuation** for rays and player (CodeParade-style)
- Improved **touch controls**: FWD / BACK / STRAFE / TURN buttons with clear labels
- Keyboard: WASD move, ←→ turn, Q/E strafe, M minimap, V anaglyph, 1–4 level select
- Distance-scaled red/cyan anaglyph depth
- Title-screen Hebrew matrix rain

## Levels

1. **Shuk Loop** — market corridors + two portal pairs  
2. **Bigger Inside** — small outer room, large inner chamber via portals  
3. **Möbius Corridor** — walking the loop flips you to the other side  
4. **Portal Maze** — multiple linked pairs; find the finish through the folds  

Pick a level on the title screen, or press `1`–`4` in-game. Finish cells are gold on the minimap; portals are orange.

## Controls

| Input | Action |
| --- | --- |
| `W A S D` / touch FWD·BACK·STR | Walk / strafe |
| `←` `→` / touch TURN | Turn |
| `Q` `E` / touch STR | Extra strafe |
| `M` | Toggle minimap |
| `V` | Toggle anaglyph / mono |
| `1`–`4` | Jump to level |
| Walk into portal (orange) | Teleport to linked portal |
| Walk onto finish (gold) | Level complete |

## Non-Euclidean notes

Portals transform rays and the player with a rigid exit orientation. That is the same core trick as CodeParade’s engine and *Portal*: spaces can connect in ways Euclidean geometry forbids, and views continue without seams.

## Origin

Reformed from the private `asskey-engine` prototype. Multi-level mazes, finish lines, and touch controls added later.
