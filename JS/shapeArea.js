function shapeArea(n) {
  if (n==0) {
      return 1;
  } else {
   return 4*(n-1)+shapeArea(n-1);
  }
}
