function booWho(bool) {
  if (typeof bool === "boolean") {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}

booWho(null);