lass LibraryItem
 attr_accessor :title, :author, :publication_year
 def initialize(title, author, year)
 @title = title
 @author = author
 @publication_year = year
 end
 def due_date
 Date.today + 14
 end
end
class Book < LibraryItem
 attr_accessor :isbn, :pages
 def initialize(title, author, year, isbn, pages)
 super(title, author, year)
 @isbn = isbn
 @pages = pages
 end
end
class DVD < LibraryItem
 attr_accessor :running_time, :genre
 def initialize(title, author, year, running_time, genre)
 super(title, author, year)
 @running_time = running_time
 @genre = genre
 end
 def due_date
 Date.today + 7
 end
end
class Magazine < LibraryItem
 attr_accessor :issue_number, :publisher
 def initialize(title, author, year, issue, publisher)
 super(title, author, year)
 @issue_number = issue
 @publisher = publisher
 end
end
puts "1. Book\n2. DVD\n3. Magazine"
print "Choose item: "
choice = gets.to_i
case choice
when 1
 book = Book.new("Ruby Guide", "Matz", 2023, "12345", 300)
 puts "Book ISBN: #{book.isbn}"
 puts "Due Date: #{book.due_date}"
when 2
 dvd = DVD.new("Inception", "Nolan", 2010, 148, "Sci-Fi")
 puts "DVD Genre: #{dvd.genre}"
 puts "Due Date: #{dvd.due_date}"
when 3
 mag = Magazine.new("Tech Today", "Editor", 2024, 5, "TechPub")
 puts "Issue No: #{mag.issue_number}"
 puts "Due Date: #{mag.due_date}"
end