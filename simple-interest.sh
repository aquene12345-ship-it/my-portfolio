#!/bin/bash
# Simple Interest Calculator

echo "Enter the principal amount:"
read p
echo "Enter the rate of interest per year:"
read r
echo "Enter the time period in years:"
read t

# Formula: Simple Interest = (p * r * t) / 100
# Since Bash does not support floating point math natively, we use 'bc'
interest=$(echo "scale=2; ($p * $r * $t) / 100" | bc)

echo "The simple interest is: $interest"
