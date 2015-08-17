class AddImagesColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :images, :text
  end
end
