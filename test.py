import pygame
import sys

pygame.init()

pygame.display.set_caption("Title")
screen = pygame.display.set_mode((500, 300))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
    
    screen.fill("white")
    pygame.display.flip()