fn main() {
    let name = "John";
    let mut relation_status = "single";

    // mut must be used before the variable name if the variable is intended to be mutable
    // in Rust, by defaul a variable is not mutable
    relation_status = "not_single";
}
