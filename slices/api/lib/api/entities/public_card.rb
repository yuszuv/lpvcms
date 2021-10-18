require 'rom/struct'

module Api
  module Entities
    class PublicCard < ROM::Struct
      attribute :id, HanfBrett::Types::Coercible::String
      attribute :type, HanfBrett::Types::String.enum('SUCHE', 'BIETE')
      attribute :topic, HanfBrett::Types::String
      attribute :text, HanfBrett::Types::String
      attribute :images, HanfBrett::Types::Array
    end
  end
end