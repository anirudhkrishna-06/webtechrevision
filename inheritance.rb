class Product
 attr_accessor :name, :price, :description
 def initialize(name, price, desc)
 @name = name
 @price = price
 @description = desc
 end
 def discount
 @price * 0.10
 end
end
class Book < Product
 attr_accessor :author, :isbn
 def initialize(name, price, desc, author, isbn)
 super(name, price, desc)
 @author = author
 @isbn = isbn
 end
 def discount
 @price * 0.20
 end
end
class Clothing < Product
 attr_accessor :size, :color
 def initialize(name, price, desc, size, color)
 super(name, price, desc)
 @size = size
 @color = color
 end
 def discount
 @price * 0.15
 end
end
puts "1. Book\n2. Clothing"
print "Choose product: "
choice = gets.to_i
case choice
when 1
 b = Book.new("Ruby Book", 500, "Programming", "Matz", "111")
 puts "Discount: #{b.discount}"
when 2
 c = Clothing.new("T-Shirt", 800, "Cotton", "M", "Black")
 puts "Discount: #{c.discount}"
end
