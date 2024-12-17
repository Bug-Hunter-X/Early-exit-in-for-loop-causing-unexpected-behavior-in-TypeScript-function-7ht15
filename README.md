# TypeScript Bug: Unexpected Early Exit in For Loop

This repository demonstrates a common bug in TypeScript involving early exits within a `for` loop. The function `printNumbers2` attempts to print numbers from 1 to `n`, but prematurely exits when `i` reaches 3. This leads to incorrect behavior when `n` is less than 3.

## Bug Description

The `printNumbers2` function does not handle the case where `n` is less than 3. It returns prematurely without printing all numbers from 1 to `n`.

## Solution

The provided solution addresses this by checking if `n` is less than 3 before the loop and providing appropriate handling. This fixes the issue and ensures the function works correctly under all input scenarios.