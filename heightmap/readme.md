# Reconstructed Heightmap from Game Files

I've just cobbled together and rendered out for you what I've reconstructed from the Unity game files: the terrain exists in part as actual hightmap textures, but I believe those to be artifacts, as there are actual meshes for all parts. (They use a level streaming plugin called SECTR for that.)

Neither the heightmaps nor the meshes perfectly fit together. Only for a few "sectrs" can I extract also props like boulders, trees etc., but I believe they are doing a lot of set dressing with prop meshes to smooth the sector boundaries. (And many of them you don't see anyways unless you fly and such.)

- The reconstructed heightmap covers a height of exactly 200 m from pure black to pure white.
- Thoroughfare Butte (the end scene) is not continuous with the rest of the world; its sector is top left.
- Below that is the heightmap for the cave (floor, I assume).
