/**
 * jsSMS - A Sega Master System/Game Gear emulator in JavaScript
 * Copyright (C) 2012  Guillaume Marty (https://github.com/gmarty)
 * Based on JavaGear Copyright (c) 2002-2008 Chris White
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

var opcodeTableED = {
  0x41: {
    name: 'OUT (C),B',
    ast: o.OUT('c', 'b')
  },
  0x44: {
    name: 'NEG',
    ast: o.NEG()
  },
  0x45: {
    name: 'RETN / RETI',
    ast: o.RETN_RETI()
  },
  0x49: {
    name: 'OUT (C),C',
    ast: o.OUT('c', 'c')
  },
  0x4D: {
    name: 'RETN / RETI',
    ast: o.RETN_RETI()
  },
  0x51: {
    name: 'OUT (C),D',
    ast: o.OUT('c', 'd')
  },
  0x55: {
    name: 'RETN / RETI',
    ast: o.RETN_RETI()
  },
  0x56: {
    name: 'IM1',
    ast: o.IM1()
  },
  0x59: {
    name: 'OUT (C),E',
    ast: o.OUT('c', 'e')
  },
  0x5F: {
    name: 'LD A,R',
    ast: o.LD8('a', 'r')
  },
  0x61: {
    name: 'OUT (C),H',
    ast: o.OUT('c', 'h')
  },
  0x69: {
    name: 'OUT (C),L',
    ast: o.OUT('c', 'l')
  },
  0x73: {
    name: 'LD (nn),SP',
    ast: o.LD_NN_SP()
  },
  0x76: {
    name: 'IM1',
    ast: o.IM1()
  },
  0x79: {
    name: 'OUT (C),A',
    ast: o.OUT('c', 'a')
  },
  0xA0: {
    name: 'LDI',
    ast: o.LDI()
  },
  0xA3: {
    name: 'OUTI',
    ast: o.OUTI()
  },
  0xB0: {
    name: 'LDIR',
    ast: o.LDIR()
  },
  0xB3: {
    name: 'OTIR',
    ast: o.OTIR()
  }
};